module.exports = async function (context, req) {
  const date = "2024-01-10T11:08:01.195Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

