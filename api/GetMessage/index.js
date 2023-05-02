module.exports = async function (context, req) {
  const date = "2023-05-02T16:11:08.883Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

