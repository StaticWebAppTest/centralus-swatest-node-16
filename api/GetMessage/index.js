module.exports = async function (context, req) {
  const date = "2022-03-06T19:07:35.136Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

