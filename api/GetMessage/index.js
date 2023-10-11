module.exports = async function (context, req) {
  const date = "2023-10-11T23:08:47.447Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

