module.exports = async function (context, req) {
  const date = "2024-08-24T08:12:46.257Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

