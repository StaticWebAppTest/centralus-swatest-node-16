module.exports = async function (context, req) {
  const date = "2023-09-15T03:09:03.496Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

