module.exports = async function (context, req) {
  const date = "2023-04-22T07:07:40.451Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

