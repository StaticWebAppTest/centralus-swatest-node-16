module.exports = async function (context, req) {
  const date = "2025-04-06T11:09:20.590Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

