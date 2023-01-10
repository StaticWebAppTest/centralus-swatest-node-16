module.exports = async function (context, req) {
  const date = "2023-01-10T07:08:41.675Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

