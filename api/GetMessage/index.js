module.exports = async function (context, req) {
  const date = "2022-07-08T05:18:20.756Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

