module.exports = async function (context, req) {
  const date = "2024-02-23T02:15:04.993Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

