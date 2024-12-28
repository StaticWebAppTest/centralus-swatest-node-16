module.exports = async function (context, req) {
  const date = "2024-12-28T13:14:54.364Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

