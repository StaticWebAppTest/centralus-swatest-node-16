module.exports = async function (context, req) {
  const date = "2024-10-21T12:23:03.077Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

