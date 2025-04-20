module.exports = async function (context, req) {
  const date = "2025-04-20T17:11:39.870Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

