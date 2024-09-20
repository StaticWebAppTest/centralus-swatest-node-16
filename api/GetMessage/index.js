module.exports = async function (context, req) {
  const date = "2024-09-20T11:09:54.333Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

