module.exports = async function (context, req) {
  const date = "2024-07-15T10:11:37.796Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

