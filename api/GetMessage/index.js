module.exports = async function (context, req) {
  const date = "2025-02-24T14:11:54.114Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

