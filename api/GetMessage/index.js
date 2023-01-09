module.exports = async function (context, req) {
  const date = "2023-01-09T11:08:29.806Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

