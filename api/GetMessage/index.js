module.exports = async function (context, req) {
  const date = "2023-01-19T23:10:27.046Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

