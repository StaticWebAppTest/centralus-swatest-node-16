module.exports = async function (context, req) {
  const date = "2023-03-27T18:13:21.064Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

