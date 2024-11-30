module.exports = async function (context, req) {
  const date = "2024-11-30T14:10:13.097Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

