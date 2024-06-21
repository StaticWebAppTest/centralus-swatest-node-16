module.exports = async function (context, req) {
  const date = "2024-06-21T11:08:52.426Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

