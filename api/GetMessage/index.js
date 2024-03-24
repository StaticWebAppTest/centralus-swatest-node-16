module.exports = async function (context, req) {
  const date = "2024-03-24T21:07:29.447Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

