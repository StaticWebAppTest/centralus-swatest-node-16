module.exports = async function (context, req) {
  const date = "2024-05-07T11:08:49.871Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

