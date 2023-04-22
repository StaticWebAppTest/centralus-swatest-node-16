module.exports = async function (context, req) {
  const date = "2023-04-22T02:01:09.051Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

