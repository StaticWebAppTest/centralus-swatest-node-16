module.exports = async function (context, req) {
  const date = "2023-11-13T02:21:20.555Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

