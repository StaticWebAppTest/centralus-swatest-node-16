module.exports = async function (context, req) {
  const date = "2023-07-01T23:09:15.496Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

