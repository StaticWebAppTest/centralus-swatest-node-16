module.exports = async function (context, req) {
  const date = "2023-02-02T19:06:54.871Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

