module.exports = async function (context, req) {
  const date = "2024-08-16T06:14:45.716Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

