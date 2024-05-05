module.exports = async function (context, req) {
  const date = "2024-05-05T06:12:37.021Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

