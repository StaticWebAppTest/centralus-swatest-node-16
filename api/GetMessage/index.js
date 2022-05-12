module.exports = async function (context, req) {
  const date = "2022-05-12T22:12:25.525Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

