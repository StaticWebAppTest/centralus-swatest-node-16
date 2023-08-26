module.exports = async function (context, req) {
  const date = "2023-08-26T23:07:52.049Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

