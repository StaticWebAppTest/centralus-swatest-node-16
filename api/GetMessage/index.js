module.exports = async function (context, req) {
  const date = "2024-09-10T13:18:26.043Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

