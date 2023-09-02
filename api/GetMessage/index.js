module.exports = async function (context, req) {
  const date = "2023-09-02T20:08:11.725Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

