module.exports = async function (context, req) {
  const date = "2025-08-21T09:14:13.985Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

