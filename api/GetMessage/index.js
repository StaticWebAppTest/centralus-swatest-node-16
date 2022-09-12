module.exports = async function (context, req) {
  const date = "2022-09-12T17:23:43.266Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

