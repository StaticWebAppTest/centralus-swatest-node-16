module.exports = async function (context, req) {
  const date = "2022-05-24T22:11:25.224Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

