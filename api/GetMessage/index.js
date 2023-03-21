module.exports = async function (context, req) {
  const date = "2023-03-21T17:08:37.502Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

