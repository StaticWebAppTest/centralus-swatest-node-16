module.exports = async function (context, req) {
  const date = "2022-06-15T07:10:26.184Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

