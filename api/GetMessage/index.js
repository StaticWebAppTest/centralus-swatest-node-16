module.exports = async function (context, req) {
  const date = "2024-01-27T13:08:25.203Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

