module.exports = async function (context, req) {
  const date = "2022-07-19T01:06:08.910Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

