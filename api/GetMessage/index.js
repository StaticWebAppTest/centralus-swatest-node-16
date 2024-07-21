module.exports = async function (context, req) {
  const date = "2024-07-21T12:18:21.999Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

