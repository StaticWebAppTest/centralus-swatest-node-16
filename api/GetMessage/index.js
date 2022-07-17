module.exports = async function (context, req) {
  const date = "2022-07-17T17:11:10.953Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

