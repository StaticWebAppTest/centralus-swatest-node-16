module.exports = async function (context, req) {
  const date = "2025-04-18T11:10:33.871Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

