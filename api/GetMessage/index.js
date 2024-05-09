module.exports = async function (context, req) {
  const date = "2024-05-09T09:10:38.069Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

