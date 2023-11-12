module.exports = async function (context, req) {
  const date = "2023-11-12T05:08:17.301Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

