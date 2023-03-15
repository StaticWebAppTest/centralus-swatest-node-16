module.exports = async function (context, req) {
  const date = "2023-03-15T16:13:34.509Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

