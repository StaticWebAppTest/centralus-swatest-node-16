module.exports = async function (context, req) {
  const date = "2024-09-03T23:11:33.961Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

