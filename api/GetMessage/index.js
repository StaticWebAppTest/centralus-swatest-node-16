module.exports = async function (context, req) {
  const date = "2024-09-19T23:11:44.933Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

