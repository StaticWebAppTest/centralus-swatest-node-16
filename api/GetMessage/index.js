module.exports = async function (context, req) {
  const date = "2024-02-19T16:12:38.223Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

