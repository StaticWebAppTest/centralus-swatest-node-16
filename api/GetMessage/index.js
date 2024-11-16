module.exports = async function (context, req) {
  const date = "2024-11-16T14:09:56.259Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

