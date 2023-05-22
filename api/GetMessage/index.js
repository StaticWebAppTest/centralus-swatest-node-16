module.exports = async function (context, req) {
  const date = "2023-05-22T00:51:27.451Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

