module.exports = async function (context, req) {
  const date = "2023-05-26T23:08:21.121Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

