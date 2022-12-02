module.exports = async function (context, req) {
  const date = "2022-12-02T17:08:51.673Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

