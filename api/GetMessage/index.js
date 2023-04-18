module.exports = async function (context, req) {
  const date = "2023-04-18T05:08:41.713Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

