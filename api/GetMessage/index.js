module.exports = async function (context, req) {
  const date = "2025-02-21T15:12:07.281Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

