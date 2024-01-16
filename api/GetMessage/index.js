module.exports = async function (context, req) {
  const date = "2024-01-16T06:13:01.036Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

