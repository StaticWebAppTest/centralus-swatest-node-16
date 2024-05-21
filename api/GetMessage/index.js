module.exports = async function (context, req) {
  const date = "2024-05-21T13:12:21.806Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

