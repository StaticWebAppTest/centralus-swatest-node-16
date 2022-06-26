module.exports = async function (context, req) {
  const date = "2022-06-26T16:13:02.083Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

