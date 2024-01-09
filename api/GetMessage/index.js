module.exports = async function (context, req) {
  const date = "2024-01-09T11:08:01.806Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

