module.exports = async function (context, req) {
  const date = "2022-05-31T17:22:55.005Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

