module.exports = async function (context, req) {
  const date = "2024-06-23T03:11:16.411Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

