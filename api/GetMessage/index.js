module.exports = async function (context, req) {
  const date = "2023-02-23T02:16:00.613Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

