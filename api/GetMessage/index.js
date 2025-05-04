module.exports = async function (context, req) {
  const date = "2025-05-04T13:20:24.385Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

