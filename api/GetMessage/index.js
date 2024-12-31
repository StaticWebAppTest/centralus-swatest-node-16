module.exports = async function (context, req) {
  const date = "2024-12-31T15:11:17.067Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

