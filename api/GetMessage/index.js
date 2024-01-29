module.exports = async function (context, req) {
  const date = "2024-01-29T06:12:01.280Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

