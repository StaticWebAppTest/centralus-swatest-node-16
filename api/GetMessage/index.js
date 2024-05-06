module.exports = async function (context, req) {
  const date = "2024-05-06T20:09:54.792Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

