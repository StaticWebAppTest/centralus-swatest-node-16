module.exports = async function (context, req) {
  const date = "2024-01-03T23:09:54.877Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

