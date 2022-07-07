module.exports = async function (context, req) {
  const date = "2022-07-07T09:10:41.663Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

