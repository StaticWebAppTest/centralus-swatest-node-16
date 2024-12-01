module.exports = async function (context, req) {
  const date = "2024-12-01T14:10:27.505Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

