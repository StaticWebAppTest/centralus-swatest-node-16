module.exports = async function (context, req) {
  const date = "2024-12-30T08:15:52.187Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

