module.exports = async function (context, req) {
  const date = "2023-10-11T01:43:05.042Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

