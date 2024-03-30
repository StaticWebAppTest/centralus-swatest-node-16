module.exports = async function (context, req) {
  const date = "2024-03-30T03:13:04.183Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

