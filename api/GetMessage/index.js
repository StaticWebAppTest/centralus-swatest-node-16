module.exports = async function (context, req) {
  const date = "2024-01-16T13:12:15.941Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

