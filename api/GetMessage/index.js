module.exports = async function (context, req) {
  const date = "2023-04-22T09:08:13.894Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

