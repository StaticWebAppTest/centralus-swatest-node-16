module.exports = async function (context, req) {
  const date = "2023-11-25T23:08:17.414Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

