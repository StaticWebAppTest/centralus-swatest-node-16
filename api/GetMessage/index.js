module.exports = async function (context, req) {
  const date = "2023-08-01T23:08:24.686Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

