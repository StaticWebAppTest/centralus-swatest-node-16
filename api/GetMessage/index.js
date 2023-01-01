module.exports = async function (context, req) {
  const date = "2023-01-01T04:11:07.014Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

