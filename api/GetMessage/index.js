module.exports = async function (context, req) {
  const date = "2025-12-28T05:18:50.119Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

