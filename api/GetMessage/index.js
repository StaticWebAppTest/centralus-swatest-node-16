module.exports = async function (context, req) {
  const date = "2025-05-12T09:15:19.144Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

