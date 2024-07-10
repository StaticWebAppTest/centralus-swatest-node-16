module.exports = async function (context, req) {
  const date = "2024-07-10T00:49:54.675Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

