module.exports = async function (context, req) {
  const date = "2022-12-15T12:18:41.631Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

