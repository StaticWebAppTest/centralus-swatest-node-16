module.exports = async function (context, req) {
  const date = "2023-12-01T12:17:23.806Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

