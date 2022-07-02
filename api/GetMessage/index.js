module.exports = async function (context, req) {
  const date = "2022-07-02T00:58:31.916Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

