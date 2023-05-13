module.exports = async function (context, req) {
  const date = "2023-05-13T02:27:58.295Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

