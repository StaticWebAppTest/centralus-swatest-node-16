module.exports = async function (context, req) {
  const date = "2024-12-23T11:09:46.558Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

