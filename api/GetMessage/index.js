module.exports = async function (context, req) {
  const date = "2024-11-03T23:12:45.789Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

