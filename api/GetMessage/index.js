module.exports = async function (context, req) {
  const date = "2024-06-14T11:08:39.203Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

