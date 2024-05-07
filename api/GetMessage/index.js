module.exports = async function (context, req) {
  const date = "2024-05-07T17:08:45.042Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

