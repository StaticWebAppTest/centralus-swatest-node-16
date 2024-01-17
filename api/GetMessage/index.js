module.exports = async function (context, req) {
  const date = "2024-01-17T16:12:06.021Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

