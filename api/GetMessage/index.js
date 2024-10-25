module.exports = async function (context, req) {
  const date = "2024-10-25T10:12:52.995Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

