module.exports = async function (context, req) {
  const date = "2025-05-25T23:12:13.731Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

