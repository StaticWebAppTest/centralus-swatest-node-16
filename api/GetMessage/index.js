module.exports = async function (context, req) {
  const date = "2023-09-16T17:07:00.878Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

