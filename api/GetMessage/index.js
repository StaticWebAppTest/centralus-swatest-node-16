module.exports = async function (context, req) {
  const date = "2024-02-22T20:09:08.203Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

