module.exports = async function (context, req) {
  const date = "2024-01-20T01:51:19.248Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

