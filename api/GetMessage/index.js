module.exports = async function (context, req) {
  const date = "2024-03-14T16:11:44.112Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

