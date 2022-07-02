module.exports = async function (context, req) {
  const date = "2022-07-02T20:11:04.771Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

