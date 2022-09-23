module.exports = async function (context, req) {
  const date = "2022-09-23T06:43:44.953Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

