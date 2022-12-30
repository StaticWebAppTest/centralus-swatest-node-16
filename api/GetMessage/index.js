module.exports = async function (context, req) {
  const date = "2022-12-30T13:13:34.265Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

