module.exports = async function (context, req) {
  const date = "2023-09-07T00:39:32.337Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

