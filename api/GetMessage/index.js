module.exports = async function (context, req) {
  const date = "2025-03-23T15:11:26.363Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

