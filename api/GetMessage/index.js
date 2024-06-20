module.exports = async function (context, req) {
  const date = "2024-06-20T13:12:03.411Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

