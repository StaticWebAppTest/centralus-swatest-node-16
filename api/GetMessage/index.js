module.exports = async function (context, req) {
  const date = "2024-07-16T06:15:00.959Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

