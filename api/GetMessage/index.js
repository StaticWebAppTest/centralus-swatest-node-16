module.exports = async function (context, req) {
  const date = "2024-04-21T15:09:07.792Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

