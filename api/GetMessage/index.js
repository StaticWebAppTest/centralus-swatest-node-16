module.exports = async function (context, req) {
  const date = "2024-05-10T03:10:20.249Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

