module.exports = async function (context, req) {
  const date = "2024-08-12T15:12:14.019Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

