module.exports = async function (context, req) {
  const date = "2023-09-01T14:08:09.537Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

