module.exports = async function (context, req) {
  const date = "2025-10-12T09:11:48.310Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

