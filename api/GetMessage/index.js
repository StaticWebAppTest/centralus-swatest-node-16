module.exports = async function (context, req) {
  const date = "2025-05-10T11:10:52.642Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

