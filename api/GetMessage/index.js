module.exports = async function (context, req) {
  const date = "2022-07-13T08:14:41.021Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

