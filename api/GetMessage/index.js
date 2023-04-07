module.exports = async function (context, req) {
  const date = "2023-04-07T21:07:28.825Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

