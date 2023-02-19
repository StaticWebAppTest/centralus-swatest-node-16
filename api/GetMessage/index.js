module.exports = async function (context, req) {
  const date = "2023-02-19T16:11:51.072Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

