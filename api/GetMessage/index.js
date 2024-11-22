module.exports = async function (context, req) {
  const date = "2024-11-22T02:24:20.213Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

