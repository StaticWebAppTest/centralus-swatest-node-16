module.exports = async function (context, req) {
  const date = "2025-05-12T11:11:31.030Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

