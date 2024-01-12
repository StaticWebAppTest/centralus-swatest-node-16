module.exports = async function (context, req) {
  const date = "2024-01-12T09:09:48.637Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

