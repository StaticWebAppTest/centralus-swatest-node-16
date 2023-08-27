module.exports = async function (context, req) {
  const date = "2023-08-27T13:08:40.754Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

