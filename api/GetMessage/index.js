module.exports = async function (context, req) {
  const date = "2024-04-06T11:06:56.203Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

