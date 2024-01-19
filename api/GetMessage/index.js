module.exports = async function (context, req) {
  const date = "2024-01-19T21:08:08.900Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

