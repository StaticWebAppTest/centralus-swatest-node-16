module.exports = async function (context, req) {
  const date = "2024-09-18T15:12:11.871Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

