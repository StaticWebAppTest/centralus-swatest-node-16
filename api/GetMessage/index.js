module.exports = async function (context, req) {
  const date = "2024-05-02T05:10:48.411Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

