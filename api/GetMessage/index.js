module.exports = async function (context, req) {
  const date = "2023-04-06T14:08:25.310Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

