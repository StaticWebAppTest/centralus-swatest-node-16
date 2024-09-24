module.exports = async function (context, req) {
  const date = "2024-09-24T15:12:17.043Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

