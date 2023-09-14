module.exports = async function (context, req) {
  const date = "2023-09-14T21:07:34.763Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

