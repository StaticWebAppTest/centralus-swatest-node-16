module.exports = async function (context, req) {
  const date = "2024-10-05T09:13:37.792Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

