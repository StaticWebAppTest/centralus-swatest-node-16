module.exports = async function (context, req) {
  const date = "2023-08-31T09:08:52.310Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

