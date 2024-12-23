module.exports = async function (context, req) {
  const date = "2024-12-23T10:12:54.777Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

