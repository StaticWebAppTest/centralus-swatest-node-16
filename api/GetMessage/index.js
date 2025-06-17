module.exports = async function (context, req) {
  const date = "2025-06-17T09:15:20.870Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

