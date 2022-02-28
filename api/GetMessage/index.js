module.exports = async function (context, req) {
  const date = "2022-02-28T00:41:34.107Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

