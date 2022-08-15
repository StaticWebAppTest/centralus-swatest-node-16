module.exports = async function (context, req) {
  const date = "2022-08-15T18:14:02.041Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

