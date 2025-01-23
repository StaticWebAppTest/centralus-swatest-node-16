module.exports = async function (context, req) {
  const date = "2025-01-23T09:12:19.966Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

