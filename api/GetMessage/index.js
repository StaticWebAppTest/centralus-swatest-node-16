module.exports = async function (context, req) {
  const date = "2024-03-06T03:09:37.699Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

