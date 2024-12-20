module.exports = async function (context, req) {
  const date = "2024-12-20T07:11:02.191Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

