module.exports = async function (context, req) {
  const date = "2024-06-13T16:13:50.281Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

