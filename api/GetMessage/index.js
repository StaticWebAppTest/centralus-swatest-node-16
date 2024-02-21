module.exports = async function (context, req) {
  const date = "2024-02-21T06:11:59.590Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

