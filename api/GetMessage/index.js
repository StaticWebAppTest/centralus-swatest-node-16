module.exports = async function (context, req) {
  const date = "2023-02-12T13:14:31.763Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

