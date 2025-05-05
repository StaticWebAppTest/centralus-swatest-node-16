module.exports = async function (context, req) {
  const date = "2025-05-05T14:13:21.657Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

