module.exports = async function (context, req) {
  const date = "2024-07-19T03:12:15.900Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

