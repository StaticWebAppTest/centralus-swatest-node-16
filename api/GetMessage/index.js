module.exports = async function (context, req) {
  const date = "2024-12-24T03:17:02.119Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

