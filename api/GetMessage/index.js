module.exports = async function (context, req) {
  const date = "2022-12-30T00:50:21.337Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

