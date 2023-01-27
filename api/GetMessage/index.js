module.exports = async function (context, req) {
  const date = "2023-01-27T07:09:05.014Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

