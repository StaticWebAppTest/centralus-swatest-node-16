module.exports = async function (context, req) {
  const date = "2023-05-31T02:22:07.364Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

