module.exports = async function (context, req) {
  const date = "2024-04-17T11:08:24.605Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

