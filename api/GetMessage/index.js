module.exports = async function (context, req) {
  const date = "2023-06-02T16:10:58.283Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

