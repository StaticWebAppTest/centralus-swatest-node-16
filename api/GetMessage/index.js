module.exports = async function (context, req) {
  const date = "2023-03-04T19:07:34.498Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

