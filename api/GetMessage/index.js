module.exports = async function (context, req) {
  const date = "2023-11-16T20:09:47.558Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

