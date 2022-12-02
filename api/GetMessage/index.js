module.exports = async function (context, req) {
  const date = "2022-12-02T04:11:48.808Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

