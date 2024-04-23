module.exports = async function (context, req) {
  const date = "2024-04-23T00:42:51.675Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

