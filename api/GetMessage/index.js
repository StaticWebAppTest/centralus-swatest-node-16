module.exports = async function (context, req) {
  const date = "2023-10-01T23:08:18.980Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

