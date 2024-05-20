module.exports = async function (context, req) {
  const date = "2024-05-20T01:53:45.590Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

