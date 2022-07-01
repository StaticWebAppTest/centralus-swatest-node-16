module.exports = async function (context, req) {
  const date = "2022-07-01T07:10:44.265Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

