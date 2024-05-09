module.exports = async function (context, req) {
  const date = "2024-05-09T15:10:58.363Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

