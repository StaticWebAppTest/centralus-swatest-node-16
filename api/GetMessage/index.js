module.exports = async function (context, req) {
  const date = "2022-03-28T15:10:41.543Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

