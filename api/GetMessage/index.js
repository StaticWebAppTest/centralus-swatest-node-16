module.exports = async function (context, req) {
  const date = "2024-03-16T16:09:33.844Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

