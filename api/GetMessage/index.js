module.exports = async function (context, req) {
  const date = "2024-05-06T05:10:01.363Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

