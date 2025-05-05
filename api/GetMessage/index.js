module.exports = async function (context, req) {
  const date = "2025-05-05T11:11:11.181Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

