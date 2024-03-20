module.exports = async function (context, req) {
  const date = "2024-03-20T04:12:37.496Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

