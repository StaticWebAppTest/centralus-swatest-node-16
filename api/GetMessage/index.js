module.exports = async function (context, req) {
  const date = "2023-05-15T04:10:39.701Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

