module.exports = async function (context, req) {
  const date = "2023-04-15T11:07:03.204Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

