module.exports = async function (context, req) {
  const date = "2024-02-05T06:12:11.981Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

