module.exports = async function (context, req) {
  const date = "2022-06-26T18:11:48.337Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

