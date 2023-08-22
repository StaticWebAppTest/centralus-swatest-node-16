module.exports = async function (context, req) {
  const date = "2023-08-22T02:13:54.520Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

