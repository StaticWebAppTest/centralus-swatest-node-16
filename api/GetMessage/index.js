module.exports = async function (context, req) {
  const date = "2024-07-30T21:11:11.871Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

