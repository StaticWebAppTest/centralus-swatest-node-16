module.exports = async function (context, req) {
  const date = "2024-12-01T07:11:30.337Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

