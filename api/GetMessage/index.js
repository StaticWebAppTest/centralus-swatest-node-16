module.exports = async function (context, req) {
  const date = "2025-05-18T01:10:25.280Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

