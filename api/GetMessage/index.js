module.exports = async function (context, req) {
  const date = "2025-03-17T09:14:41.790Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

