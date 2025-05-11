module.exports = async function (context, req) {
  const date = "2025-05-11T17:10:11.792Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

