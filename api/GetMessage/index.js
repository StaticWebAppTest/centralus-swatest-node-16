module.exports = async function (context, req) {
  const date = "2024-08-05T14:10:05.411Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

