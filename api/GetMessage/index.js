module.exports = async function (context, req) {
  const date = "2024-09-28T16:13:03.763Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

