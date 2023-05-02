module.exports = async function (context, req) {
  const date = "2023-05-02T01:59:58.121Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

