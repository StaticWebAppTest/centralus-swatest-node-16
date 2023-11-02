module.exports = async function (context, req) {
  const date = "2023-11-02T05:08:31.826Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

