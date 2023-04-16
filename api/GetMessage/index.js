module.exports = async function (context, req) {
  const date = "2023-04-16T04:10:17.262Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

