module.exports = async function (context, req) {
  const date = "2022-11-01T05:42:09.265Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

