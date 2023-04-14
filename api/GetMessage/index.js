module.exports = async function (context, req) {
  const date = "2023-04-14T02:28:19.977Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

