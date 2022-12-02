module.exports = async function (context, req) {
  const date = "2022-12-02T11:06:41.472Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

