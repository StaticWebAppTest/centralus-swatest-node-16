module.exports = async function (context, req) {
  const date = "2024-02-21T15:08:54.974Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

