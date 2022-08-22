module.exports = async function (context, req) {
  const date = "2022-08-22T07:09:34.708Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

