module.exports = async function (context, req) {
  const date = "2024-07-01T08:14:06.962Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

