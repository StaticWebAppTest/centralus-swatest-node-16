module.exports = async function (context, req) {
  const date = "2025-05-10T09:12:15.228Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

