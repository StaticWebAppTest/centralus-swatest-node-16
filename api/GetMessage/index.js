module.exports = async function (context, req) {
  const date = "2024-10-03T09:12:30.984Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

