module.exports = async function (context, req) {
  const date = "2022-09-22T05:58:38.796Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

