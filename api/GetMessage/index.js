module.exports = async function (context, req) {
  const date = "2024-12-16T16:15:53.141Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

