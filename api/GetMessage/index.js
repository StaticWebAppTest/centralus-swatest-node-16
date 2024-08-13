module.exports = async function (context, req) {
  const date = "2024-08-13T19:09:22.605Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

