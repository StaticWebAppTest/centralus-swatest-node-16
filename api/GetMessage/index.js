module.exports = async function (context, req) {
  const date = "2022-10-22T19:13:09.741Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

