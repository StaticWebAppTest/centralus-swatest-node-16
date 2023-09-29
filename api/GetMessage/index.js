module.exports = async function (context, req) {
  const date = "2023-09-29T23:08:45.158Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

