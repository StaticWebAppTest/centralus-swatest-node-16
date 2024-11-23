module.exports = async function (context, req) {
  const date = "2024-11-23T09:12:24.332Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

