module.exports = async function (context, req) {
  const date = "2022-07-02T03:13:28.078Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

