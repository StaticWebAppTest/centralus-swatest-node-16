module.exports = async function (context, req) {
  const date = "2022-06-27T04:43:42.179Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

