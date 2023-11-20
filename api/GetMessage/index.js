module.exports = async function (context, req) {
  const date = "2023-11-20T13:13:36.733Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

