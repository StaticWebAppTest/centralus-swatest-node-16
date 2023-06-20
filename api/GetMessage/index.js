module.exports = async function (context, req) {
  const date = "2023-06-20T12:17:45.657Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

