module.exports = async function (context, req) {
  const date = "2025-02-10T14:11:37.926Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

