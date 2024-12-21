module.exports = async function (context, req) {
  const date = "2024-12-21T23:10:29.799Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

