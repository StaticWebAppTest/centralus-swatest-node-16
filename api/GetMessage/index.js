module.exports = async function (context, req) {
  const date = "2023-01-28T13:12:57.692Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

