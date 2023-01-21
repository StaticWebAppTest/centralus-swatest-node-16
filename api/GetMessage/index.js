module.exports = async function (context, req) {
  const date = "2023-01-21T08:11:27.337Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

