module.exports = async function (context, req) {
  const date = "2023-07-07T10:10:36.935Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

