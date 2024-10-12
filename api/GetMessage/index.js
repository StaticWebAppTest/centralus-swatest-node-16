module.exports = async function (context, req) {
  const date = "2024-10-12T09:12:24.813Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

