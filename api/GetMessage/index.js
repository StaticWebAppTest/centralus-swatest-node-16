module.exports = async function (context, req) {
  const date = "2024-10-08T09:12:37.763Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

