module.exports = async function (context, req) {
  const date = "2023-10-03T01:43:40.226Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

