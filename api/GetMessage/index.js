module.exports = async function (context, req) {
  const date = "2024-07-06T00:46:10.363Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

