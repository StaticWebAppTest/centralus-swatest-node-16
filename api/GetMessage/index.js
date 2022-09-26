module.exports = async function (context, req) {
  const date = "2022-09-26T22:13:05.369Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

