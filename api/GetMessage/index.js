module.exports = async function (context, req) {
  const date = "2024-07-19T16:12:40.837Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

