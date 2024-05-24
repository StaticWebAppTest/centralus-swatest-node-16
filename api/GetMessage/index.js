module.exports = async function (context, req) {
  const date = "2024-05-24T21:08:54.411Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

