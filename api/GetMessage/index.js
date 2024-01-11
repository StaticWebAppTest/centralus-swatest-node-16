module.exports = async function (context, req) {
  const date = "2024-01-11T21:08:29.447Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

