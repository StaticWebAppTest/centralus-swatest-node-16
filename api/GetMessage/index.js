module.exports = async function (context, req) {
  const date = "2024-07-09T19:07:54.871Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

