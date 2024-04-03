module.exports = async function (context, req) {
  const date = "2024-04-03T09:10:04.333Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

