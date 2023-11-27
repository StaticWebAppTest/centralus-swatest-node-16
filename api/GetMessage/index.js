module.exports = async function (context, req) {
  const date = "2023-11-27T03:09:56.005Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

