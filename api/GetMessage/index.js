module.exports = async function (context, req) {
  const date = "2024-02-01T04:12:30.279Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

