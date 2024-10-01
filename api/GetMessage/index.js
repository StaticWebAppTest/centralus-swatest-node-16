module.exports = async function (context, req) {
  const date = "2024-10-01T20:12:33.633Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

