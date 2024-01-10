module.exports = async function (context, req) {
  const date = "2024-01-10T16:12:21.796Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

