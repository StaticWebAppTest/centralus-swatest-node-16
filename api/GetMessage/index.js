module.exports = async function (context, req) {
  const date = "2024-04-13T12:13:05.605Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

