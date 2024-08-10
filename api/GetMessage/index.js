module.exports = async function (context, req) {
  const date = "2024-08-10T16:12:48.237Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

