module.exports = async function (context, req) {
  const date = "2023-11-01T23:08:54.109Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

