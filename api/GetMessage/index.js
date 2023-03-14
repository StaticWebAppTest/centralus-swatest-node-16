module.exports = async function (context, req) {
  const date = "2023-03-14T02:32:33.841Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

