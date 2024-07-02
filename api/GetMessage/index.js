module.exports = async function (context, req) {
  const date = "2024-07-02T10:11:23.832Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

