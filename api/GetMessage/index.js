module.exports = async function (context, req) {
  const date = "2022-11-24T04:12:41.209Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

