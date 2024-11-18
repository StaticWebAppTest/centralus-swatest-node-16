module.exports = async function (context, req) {
  const date = "2024-11-18T09:14:31.164Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

