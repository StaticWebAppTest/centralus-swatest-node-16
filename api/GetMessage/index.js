module.exports = async function (context, req) {
  const date = "2023-02-08T07:09:26.420Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

