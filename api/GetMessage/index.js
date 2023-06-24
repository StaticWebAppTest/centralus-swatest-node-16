module.exports = async function (context, req) {
  const date = "2023-06-24T20:09:51.763Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

