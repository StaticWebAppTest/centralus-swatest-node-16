module.exports = async function (context, req) {
  const date = "2022-11-13T05:12:53.760Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

