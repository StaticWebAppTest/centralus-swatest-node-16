module.exports = async function (context, req) {
  const date = "2024-05-02T13:10:33.036Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

