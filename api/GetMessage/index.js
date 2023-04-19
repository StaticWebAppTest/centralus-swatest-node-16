module.exports = async function (context, req) {
  const date = "2023-04-19T16:11:41.451Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

