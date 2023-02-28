module.exports = async function (context, req) {
  const date = "2023-02-28T16:13:38.204Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

