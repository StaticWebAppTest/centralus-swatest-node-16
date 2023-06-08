module.exports = async function (context, req) {
  const date = "2023-06-08T02:23:04.450Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

