module.exports = async function (context, req) {
  const date = "2022-06-22T08:16:12.760Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

