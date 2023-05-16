module.exports = async function (context, req) {
  const date = "2023-05-16T18:10:38.336Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

