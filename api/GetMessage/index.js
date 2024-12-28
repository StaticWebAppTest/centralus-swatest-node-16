module.exports = async function (context, req) {
  const date = "2024-12-28T11:08:48.558Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

