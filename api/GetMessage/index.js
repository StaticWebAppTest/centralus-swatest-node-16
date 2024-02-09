module.exports = async function (context, req) {
  const date = "2024-02-09T06:11:35.279Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

