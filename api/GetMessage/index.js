module.exports = async function (context, req) {
  const date = "2024-02-14T21:08:40.203Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

