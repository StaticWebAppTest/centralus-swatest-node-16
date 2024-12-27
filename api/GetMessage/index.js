module.exports = async function (context, req) {
  const date = "2024-12-27T15:11:17.967Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

