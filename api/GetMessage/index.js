module.exports = async function (context, req) {
  const date = "2024-10-06T23:10:51.337Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

