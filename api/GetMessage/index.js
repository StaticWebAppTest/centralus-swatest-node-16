module.exports = async function (context, req) {
  const date = "2023-02-12T03:13:14.035Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

