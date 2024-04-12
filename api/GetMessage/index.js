module.exports = async function (context, req) {
  const date = "2024-04-12T16:10:55.871Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

