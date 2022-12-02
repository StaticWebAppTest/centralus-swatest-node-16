module.exports = async function (context, req) {
  const date = "2022-12-02T00:51:31.199Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

