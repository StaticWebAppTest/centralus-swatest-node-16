module.exports = async function (context, req) {
  const date = "2023-07-18T01:16:22.558Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

