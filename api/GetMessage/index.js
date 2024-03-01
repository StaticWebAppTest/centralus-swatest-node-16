module.exports = async function (context, req) {
  const date = "2024-03-01T05:09:47.203Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

