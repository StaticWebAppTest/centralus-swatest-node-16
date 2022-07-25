module.exports = async function (context, req) {
  const date = "2022-07-25T11:10:16.953Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

