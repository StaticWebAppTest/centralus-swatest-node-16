module.exports = async function (context, req) {
  const date = "2024-03-19T12:16:23.962Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

