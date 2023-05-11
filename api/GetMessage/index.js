module.exports = async function (context, req) {
  const date = "2023-05-11T17:07:58.717Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

