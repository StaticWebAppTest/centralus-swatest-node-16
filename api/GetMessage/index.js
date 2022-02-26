module.exports = async function (context, req) {
  const date = "2022-02-26T14:09:39.714Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

