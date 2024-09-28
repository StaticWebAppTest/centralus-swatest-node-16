module.exports = async function (context, req) {
  const date = "2024-09-28T18:13:53.804Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

