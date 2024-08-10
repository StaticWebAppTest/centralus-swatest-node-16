module.exports = async function (context, req) {
  const date = "2024-08-10T20:10:44.043Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

