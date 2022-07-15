module.exports = async function (context, req) {
  const date = "2022-07-15T06:13:42.041Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

