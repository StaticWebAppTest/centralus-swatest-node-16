module.exports = async function (context, req) {
  const date = "2023-11-02T00:41:05.252Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

