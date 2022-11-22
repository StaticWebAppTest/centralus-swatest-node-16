module.exports = async function (context, req) {
  const date = "2022-11-22T07:10:31.582Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

