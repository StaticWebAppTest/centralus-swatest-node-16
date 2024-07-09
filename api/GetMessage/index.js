module.exports = async function (context, req) {
  const date = "2024-07-09T10:11:18.981Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

