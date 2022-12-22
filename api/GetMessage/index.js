module.exports = async function (context, req) {
  const date = "2022-12-22T03:10:17.287Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

