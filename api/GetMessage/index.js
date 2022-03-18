module.exports = async function (context, req) {
  const date = "2022-03-18T04:12:41.350Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

