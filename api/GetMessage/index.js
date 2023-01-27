module.exports = async function (context, req) {
  const date = "2023-01-27T18:11:40.244Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

