module.exports = async function (context, req) {
  const date = "2025-02-19T11:09:52.907Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

