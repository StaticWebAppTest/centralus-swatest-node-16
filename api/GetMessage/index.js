module.exports = async function (context, req) {
  const date = "2023-12-07T06:12:35.315Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

