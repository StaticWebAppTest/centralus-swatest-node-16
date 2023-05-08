module.exports = async function (context, req) {
  const date = "2023-05-08T18:10:59.318Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

