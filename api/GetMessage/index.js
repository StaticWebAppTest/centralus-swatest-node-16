module.exports = async function (context, req) {
  const date = "2024-06-19T09:13:05.164Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

