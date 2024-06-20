module.exports = async function (context, req) {
  const date = "2024-06-20T23:12:01.590Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

