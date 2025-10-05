module.exports = async function (context, req) {
  const date = "2025-10-05T14:10:06.825Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

