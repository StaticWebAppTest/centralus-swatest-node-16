module.exports = async function (context, req) {
  const date = "2024-04-21T00:46:24.449Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

