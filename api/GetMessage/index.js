module.exports = async function (context, req) {
  const date = "2022-07-20T18:13:38.225Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

