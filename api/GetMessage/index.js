module.exports = async function (context, req) {
  const date = "2024-05-16T23:09:47.705Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

