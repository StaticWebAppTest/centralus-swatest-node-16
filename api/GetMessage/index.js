module.exports = async function (context, req) {
  const date = "2024-02-21T08:12:28.951Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

