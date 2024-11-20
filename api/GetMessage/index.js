module.exports = async function (context, req) {
  const date = "2024-11-20T07:12:03.763Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

