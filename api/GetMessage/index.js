module.exports = async function (context, req) {
  const date = "2024-08-20T18:14:15.829Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

