module.exports = async function (context, req) {
  const date = "2025-05-11T12:23:07.621Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

