module.exports = async function (context, req) {
  const date = "2024-02-24T23:09:22.795Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

