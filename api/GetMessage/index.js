module.exports = async function (context, req) {
  const date = "2024-01-03T13:11:22.518Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

