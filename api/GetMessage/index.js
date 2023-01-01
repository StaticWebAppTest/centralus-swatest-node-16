module.exports = async function (context, req) {
  const date = "2023-01-01T23:09:19.741Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

