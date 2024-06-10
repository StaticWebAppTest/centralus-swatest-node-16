module.exports = async function (context, req) {
  const date = "2024-06-10T00:49:11.281Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

