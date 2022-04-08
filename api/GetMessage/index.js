module.exports = async function (context, req) {
  const date = "2022-04-08T05:09:35.012Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

