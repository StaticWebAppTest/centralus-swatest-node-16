module.exports = async function (context, req) {
  const date = "2024-06-19T13:12:43.657Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

