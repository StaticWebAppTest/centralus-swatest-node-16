module.exports = async function (context, req) {
  const date = "2022-11-02T21:12:08.257Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

