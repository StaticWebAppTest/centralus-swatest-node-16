module.exports = async function (context, req) {
  const date = "2023-12-22T06:12:15.451Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

