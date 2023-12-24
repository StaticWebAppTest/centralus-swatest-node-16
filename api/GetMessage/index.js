module.exports = async function (context, req) {
  const date = "2023-12-24T23:08:44.337Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

