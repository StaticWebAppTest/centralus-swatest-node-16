module.exports = async function (context, req) {
  const date = "2023-07-26T21:07:38.741Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

