module.exports = async function (context, req) {
  const date = "2024-08-02T21:10:45.713Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

