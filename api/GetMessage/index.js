module.exports = async function (context, req) {
  const date = "2022-06-24T22:09:54.309Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

