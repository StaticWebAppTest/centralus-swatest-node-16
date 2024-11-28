module.exports = async function (context, req) {
  const date = "2024-11-28T20:13:16.213Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

