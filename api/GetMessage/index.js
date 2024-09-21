module.exports = async function (context, req) {
  const date = "2024-09-21T13:14:42.559Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

