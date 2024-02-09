module.exports = async function (context, req) {
  const date = "2024-02-09T23:08:52.955Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

