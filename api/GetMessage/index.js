module.exports = async function (context, req) {
  const date = "2024-12-23T07:12:05.971Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

