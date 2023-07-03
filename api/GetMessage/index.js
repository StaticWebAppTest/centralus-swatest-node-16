module.exports = async function (context, req) {
  const date = "2023-07-03T01:00:25.439Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

