module.exports = async function (context, req) {
  const date = "2022-12-15T15:10:22.707Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

