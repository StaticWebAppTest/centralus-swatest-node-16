module.exports = async function (context, req) {
  const date = "2022-05-02T09:11:32.056Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

