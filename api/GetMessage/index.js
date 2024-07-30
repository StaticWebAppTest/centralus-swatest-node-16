module.exports = async function (context, req) {
  const date = "2024-07-30T15:10:46.933Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

