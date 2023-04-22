module.exports = async function (context, req) {
  const date = "2023-04-22T18:10:14.965Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

