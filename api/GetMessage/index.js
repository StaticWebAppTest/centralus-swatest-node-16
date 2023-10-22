module.exports = async function (context, req) {
  const date = "2023-10-22T15:07:55.014Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

