module.exports = async function (context, req) {
  const date = "2023-12-23T20:08:41.058Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

