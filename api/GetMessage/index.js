module.exports = async function (context, req) {
  const date = "2022-02-24T15:10:34.225Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

