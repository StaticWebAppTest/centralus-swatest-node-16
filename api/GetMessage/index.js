module.exports = async function (context, req) {
  const date = "2022-05-22T07:10:34.779Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

