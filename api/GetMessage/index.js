module.exports = async function (context, req) {
  const date = "2023-01-01T14:07:50.347Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

