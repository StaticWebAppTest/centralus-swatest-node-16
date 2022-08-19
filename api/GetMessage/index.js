module.exports = async function (context, req) {
  const date = "2022-08-19T04:43:36.532Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

