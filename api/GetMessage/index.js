module.exports = async function (context, req) {
  const date = "2023-01-04T23:09:24.496Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

