module.exports = async function (context, req) {
  const date = "2024-01-06T21:07:45.505Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

