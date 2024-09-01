module.exports = async function (context, req) {
  const date = "2024-09-01T10:10:31.827Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

