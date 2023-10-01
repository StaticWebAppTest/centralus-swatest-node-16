module.exports = async function (context, req) {
  const date = "2023-10-01T09:08:09.340Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

