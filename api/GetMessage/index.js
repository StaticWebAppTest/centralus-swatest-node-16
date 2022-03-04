module.exports = async function (context, req) {
  const date = "2022-03-04T16:13:46.064Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

