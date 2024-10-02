module.exports = async function (context, req) {
  const date = "2024-10-02T13:19:45.825Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

