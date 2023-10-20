module.exports = async function (context, req) {
  const date = "2023-10-20T22:08:11.871Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

