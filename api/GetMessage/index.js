module.exports = async function (context, req) {
  const date = "2023-05-17T18:10:32.617Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

