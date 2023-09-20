module.exports = async function (context, req) {
  const date = "2023-09-20T13:12:23.763Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

