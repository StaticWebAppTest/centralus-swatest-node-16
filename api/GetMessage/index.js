module.exports = async function (context, req) {
  const date = "2025-04-18T09:13:21.855Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

