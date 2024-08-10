module.exports = async function (context, req) {
  const date = "2024-08-10T17:08:22.037Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

