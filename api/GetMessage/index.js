module.exports = async function (context, req) {
  const date = "2022-03-07T22:09:41.996Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

