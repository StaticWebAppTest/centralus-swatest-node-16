module.exports = async function (context, req) {
  const date = "2024-11-03T10:13:21.666Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

