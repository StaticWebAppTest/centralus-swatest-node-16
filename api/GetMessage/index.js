module.exports = async function (context, req) {
  const date = "2025-04-22T18:18:07.870Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

