module.exports = async function (context, req) {
  const date = "2022-07-15T07:10:13.983Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

