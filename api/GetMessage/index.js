module.exports = async function (context, req) {
  const date = "2024-08-02T18:14:17.411Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

