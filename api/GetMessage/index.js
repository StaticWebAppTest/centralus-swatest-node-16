module.exports = async function (context, req) {
  const date = "2023-07-05T06:14:04.259Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

