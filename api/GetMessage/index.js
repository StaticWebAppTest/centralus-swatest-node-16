module.exports = async function (context, req) {
  const date = "2024-04-16T10:10:03.281Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

