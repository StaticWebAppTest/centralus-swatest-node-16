module.exports = async function (context, req) {
  const date = "2023-04-23T16:10:29.760Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

