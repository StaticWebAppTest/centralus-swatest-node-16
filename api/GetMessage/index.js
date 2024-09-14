module.exports = async function (context, req) {
  const date = "2024-09-14T23:10:17.287Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

