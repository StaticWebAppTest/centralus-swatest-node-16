module.exports = async function (context, req) {
  const date = "2024-11-22T09:13:22.411Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

