module.exports = async function (context, req) {
  const date = "2024-09-09T04:13:37.867Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

