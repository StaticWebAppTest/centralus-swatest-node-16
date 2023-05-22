module.exports = async function (context, req) {
  const date = "2023-05-22T15:08:55.300Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

