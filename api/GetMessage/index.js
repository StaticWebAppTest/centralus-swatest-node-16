module.exports = async function (context, req) {
  const date = "2023-02-18T03:10:26.710Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

