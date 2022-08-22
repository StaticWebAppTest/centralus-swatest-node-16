module.exports = async function (context, req) {
  const date = "2022-08-22T12:24:07.961Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

