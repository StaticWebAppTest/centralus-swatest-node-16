module.exports = async function (context, req) {
  const date = "2022-12-02T21:08:21.195Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

