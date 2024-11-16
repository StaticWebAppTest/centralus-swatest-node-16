module.exports = async function (context, req) {
  const date = "2024-11-16T13:17:45.394Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

