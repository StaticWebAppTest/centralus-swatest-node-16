module.exports = async function (context, req) {
  const date = "2023-06-10T05:08:00.195Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

