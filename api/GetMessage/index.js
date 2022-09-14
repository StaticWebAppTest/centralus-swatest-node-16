module.exports = async function (context, req) {
  const date = "2022-09-14T18:14:57.474Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

