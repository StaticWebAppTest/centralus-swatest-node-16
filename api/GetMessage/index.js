module.exports = async function (context, req) {
  const date = "2023-10-20T01:43:20.387Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

