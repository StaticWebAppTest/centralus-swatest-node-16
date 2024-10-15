module.exports = async function (context, req) {
  const date = "2024-10-15T09:12:36.502Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

