module.exports = async function (context, req) {
  const date = "2023-12-20T10:08:23.448Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

