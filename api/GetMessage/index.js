module.exports = async function (context, req) {
  const date = "2022-11-22T05:10:33.021Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

