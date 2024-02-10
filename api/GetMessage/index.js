module.exports = async function (context, req) {
  const date = "2024-02-10T21:08:31.976Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

