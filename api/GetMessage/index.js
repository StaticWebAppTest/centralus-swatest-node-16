module.exports = async function (context, req) {
  const date = "2024-05-14T14:09:12.097Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

