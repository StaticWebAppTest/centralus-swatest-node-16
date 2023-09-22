module.exports = async function (context, req) {
  const date = "2023-09-22T15:08:51.121Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

