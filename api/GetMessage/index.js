module.exports = async function (context, req) {
  const date = "2024-03-01T03:12:40.633Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

