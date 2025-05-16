module.exports = async function (context, req) {
  const date = "2025-05-16T08:18:20.358Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

