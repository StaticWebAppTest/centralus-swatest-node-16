module.exports = async function (context, req) {
  const date = "2024-04-01T05:09:56.855Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

