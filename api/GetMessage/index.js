module.exports = async function (context, req) {
  const date = "2024-09-23T21:10:47.036Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

