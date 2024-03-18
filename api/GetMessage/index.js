module.exports = async function (context, req) {
  const date = "2024-03-18T06:12:47.295Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

