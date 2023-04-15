module.exports = async function (context, req) {
  const date = "2023-04-15T04:10:31.304Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

