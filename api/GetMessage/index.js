module.exports = async function (context, req) {
  const date = "2024-02-21T04:10:50.968Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

