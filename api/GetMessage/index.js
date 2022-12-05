module.exports = async function (context, req) {
  const date = "2022-12-05T23:09:47.337Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

