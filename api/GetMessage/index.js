module.exports = async function (context, req) {
  const date = "2024-08-11T18:14:49.281Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

