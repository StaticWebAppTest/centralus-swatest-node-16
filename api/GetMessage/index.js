module.exports = async function (context, req) {
  const date = "2023-09-19T14:08:24.337Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

