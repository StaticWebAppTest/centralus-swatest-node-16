module.exports = async function (context, req) {
  const date = "2024-02-23T10:10:34.777Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

