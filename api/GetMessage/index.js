module.exports = async function (context, req) {
  const date = "2023-08-10T07:08:29.263Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

