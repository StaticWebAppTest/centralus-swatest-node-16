module.exports = async function (context, req) {
  const date = "2023-06-22T07:08:09.318Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

