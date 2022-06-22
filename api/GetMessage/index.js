module.exports = async function (context, req) {
  const date = "2022-06-22T15:10:53.443Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

