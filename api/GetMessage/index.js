module.exports = async function (context, req) {
  const date = "2023-06-22T06:11:53.537Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

