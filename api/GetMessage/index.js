module.exports = async function (context, req) {
  const date = "2023-03-27T04:11:37.617Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

