module.exports = async function (context, req) {
  const date = "2024-07-14T00:53:50.923Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

