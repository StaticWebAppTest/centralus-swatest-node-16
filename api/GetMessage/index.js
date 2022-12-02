module.exports = async function (context, req) {
  const date = "2022-12-02T14:08:58.709Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

