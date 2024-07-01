module.exports = async function (context, req) {
  const date = "2024-07-01T18:13:37.755Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

