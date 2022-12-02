module.exports = async function (context, req) {
  const date = "2022-12-02T16:13:06.412Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

