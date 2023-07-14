module.exports = async function (context, req) {
  const date = "2023-07-14T02:54:30.030Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

