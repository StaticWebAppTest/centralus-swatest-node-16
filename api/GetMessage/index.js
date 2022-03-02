module.exports = async function (context, req) {
  const date = "2022-03-02T23:13:53.591Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

