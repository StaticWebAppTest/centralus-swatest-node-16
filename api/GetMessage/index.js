module.exports = async function (context, req) {
  const date = "2024-11-14T23:12:14.138Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

