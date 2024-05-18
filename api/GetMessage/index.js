module.exports = async function (context, req) {
  const date = "2024-05-18T14:08:33.871Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

