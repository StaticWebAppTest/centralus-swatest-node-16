module.exports = async function (context, req) {
  const date = "2023-11-14T01:47:26.228Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

