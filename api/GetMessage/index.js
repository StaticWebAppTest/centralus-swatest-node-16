module.exports = async function (context, req) {
  const date = "2024-04-16T13:09:45.330Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

