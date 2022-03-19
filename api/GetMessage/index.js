module.exports = async function (context, req) {
  const date = "2022-03-19T17:09:53.909Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

