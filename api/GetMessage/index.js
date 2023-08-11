module.exports = async function (context, req) {
  const date = "2023-08-11T19:06:39.136Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

