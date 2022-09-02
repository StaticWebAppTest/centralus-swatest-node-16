module.exports = async function (context, req) {
  const date = "2022-09-02T20:12:03.922Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

