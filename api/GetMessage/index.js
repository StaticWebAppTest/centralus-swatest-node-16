module.exports = async function (context, req) {
  const date = "2025-02-16T14:10:13.919Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

