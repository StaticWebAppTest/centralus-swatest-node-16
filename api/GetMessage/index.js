module.exports = async function (context, req) {
  const date = "2024-02-06T19:08:01.121Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

