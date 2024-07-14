module.exports = async function (context, req) {
  const date = "2024-07-14T08:13:55.374Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

