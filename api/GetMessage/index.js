module.exports = async function (context, req) {
  const date = "2023-12-02T08:10:38.179Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

