module.exports = async function (context, req) {
  const date = "2025-02-27T14:11:56.967Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

