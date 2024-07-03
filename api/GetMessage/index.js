module.exports = async function (context, req) {
  const date = "2024-07-03T06:15:56.359Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

