module.exports = async function (context, req) {
  const date = "2023-11-07T22:08:11.822Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

