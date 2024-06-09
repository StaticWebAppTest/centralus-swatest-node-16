module.exports = async function (context, req) {
  const date = "2024-06-09T03:11:31.160Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

