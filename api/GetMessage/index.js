module.exports = async function (context, req) {
  const date = "2025-03-04T15:13:07.129Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

