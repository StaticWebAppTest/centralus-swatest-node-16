module.exports = async function (context, req) {
  const date = "2024-04-16T21:09:16.590Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

