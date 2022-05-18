module.exports = async function (context, req) {
  const date = "2022-05-18T22:10:54.760Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

