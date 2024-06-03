module.exports = async function (context, req) {
  const date = "2024-06-03T06:14:04.036Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

