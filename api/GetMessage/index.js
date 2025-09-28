module.exports = async function (context, req) {
  const date = "2025-09-28T11:09:12.299Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

