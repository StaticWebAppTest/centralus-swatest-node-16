module.exports = async function (context, req) {
  const date = "2024-11-29T13:22:15.203Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

