module.exports = async function (context, req) {
  const date = "2025-02-12T02:13:20.243Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

