module.exports = async function (context, req) {
  const date = "2023-11-01T05:08:46.964Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

