module.exports = async function (context, req) {
  const date = "2022-05-22T22:10:18.751Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

