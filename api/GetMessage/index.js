module.exports = async function (context, req) {
  const date = "2024-01-12T06:12:54.377Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

