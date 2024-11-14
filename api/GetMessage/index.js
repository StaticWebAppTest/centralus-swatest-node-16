module.exports = async function (context, req) {
  const date = "2024-11-14T12:23:06.368Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

