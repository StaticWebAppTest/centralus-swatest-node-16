module.exports = async function (context, req) {
  const date = "2025-06-22T09:13:25.690Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

