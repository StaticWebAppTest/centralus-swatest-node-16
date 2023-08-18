module.exports = async function (context, req) {
  const date = "2023-08-18T10:08:49.121Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

