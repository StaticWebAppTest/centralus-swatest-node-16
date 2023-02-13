module.exports = async function (context, req) {
  const date = "2023-02-13T20:10:48.363Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

