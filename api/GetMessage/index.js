module.exports = async function (context, req) {
  const date = "2024-09-21T15:12:08.641Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

