module.exports = async function (context, req) {
  const date = "2025-07-06T16:15:07.855Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

