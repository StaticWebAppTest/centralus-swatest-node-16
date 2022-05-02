module.exports = async function (context, req) {
  const date = "2022-05-02T15:12:37.868Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

