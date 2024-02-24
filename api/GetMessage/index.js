module.exports = async function (context, req) {
  const date = "2024-02-24T07:08:31.036Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

