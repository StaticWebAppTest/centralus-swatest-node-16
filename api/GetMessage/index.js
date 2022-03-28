module.exports = async function (context, req) {
  const date = "2022-03-28T02:29:24.186Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

