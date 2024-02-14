module.exports = async function (context, req) {
  const date = "2024-02-14T02:15:36.903Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

