module.exports = async function (context, req) {
  const date = "2024-01-07T05:09:08.763Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

