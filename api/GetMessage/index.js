module.exports = async function (context, req) {
  const date = "2022-05-26T07:10:47.525Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

