module.exports = async function (context, req) {
  const date = "2025-11-23T12:23:42.932Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

