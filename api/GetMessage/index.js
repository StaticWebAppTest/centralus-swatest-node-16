module.exports = async function (context, req) {
  const date = "2023-05-05T22:08:06.334Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

