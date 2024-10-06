module.exports = async function (context, req) {
  const date = "2024-10-06T13:15:56.665Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

