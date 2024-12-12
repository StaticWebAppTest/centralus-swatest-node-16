module.exports = async function (context, req) {
  const date = "2024-12-12T16:15:49.825Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

