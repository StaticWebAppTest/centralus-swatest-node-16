module.exports = async function (context, req) {
  const date = "2022-10-08T04:34:36.041Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

