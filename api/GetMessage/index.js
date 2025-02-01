module.exports = async function (context, req) {
  const date = "2025-02-01T15:11:58.572Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

