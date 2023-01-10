module.exports = async function (context, req) {
  const date = "2023-01-10T15:14:44.347Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

