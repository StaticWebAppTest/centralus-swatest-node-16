module.exports = async function (context, req) {
  const date = "2022-08-27T07:10:04.569Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

