module.exports = async function (context, req) {
  const date = "2024-07-19T23:10:50.337Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

