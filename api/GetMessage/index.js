module.exports = async function (context, req) {
  const date = "2022-05-02T05:25:19.450Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

