module.exports = async function (context, req) {
  const date = "2024-01-07T17:07:53.995Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

