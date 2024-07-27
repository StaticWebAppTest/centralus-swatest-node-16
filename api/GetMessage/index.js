module.exports = async function (context, req) {
  const date = "2024-07-27T21:08:47.411Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

