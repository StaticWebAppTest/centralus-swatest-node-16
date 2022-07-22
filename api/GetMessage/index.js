module.exports = async function (context, req) {
  const date = "2022-07-22T18:14:13.304Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

