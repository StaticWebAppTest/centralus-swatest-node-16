module.exports = async function (context, req) {
  const date = "2025-08-20T18:19:23.719Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

