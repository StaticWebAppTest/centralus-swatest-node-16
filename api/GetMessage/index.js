module.exports = async function (context, req) {
  const date = "2023-12-04T02:23:58.010Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

