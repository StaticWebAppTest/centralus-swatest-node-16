module.exports = async function (context, req) {
  const date = "2022-09-02T22:11:39.404Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

