module.exports = async function (context, req) {
  const date = "2024-12-21T11:08:28.795Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

