module.exports = async function (context, req) {
  const date = "2025-05-24T09:12:18.223Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

