module.exports = async function (context, req) {
  const date = "2025-06-01T11:10:30.539Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

