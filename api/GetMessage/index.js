module.exports = async function (context, req) {
  const date = "2022-05-11T03:15:39.525Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

