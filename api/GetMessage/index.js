module.exports = async function (context, req) {
  const date = "2023-01-10T12:19:00.724Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

