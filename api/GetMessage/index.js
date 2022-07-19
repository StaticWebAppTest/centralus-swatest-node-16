module.exports = async function (context, req) {
  const date = "2022-07-19T22:10:41.655Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

