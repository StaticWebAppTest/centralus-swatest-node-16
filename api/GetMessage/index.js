module.exports = async function (context, req) {
  const date = "2024-09-19T19:08:52.279Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

