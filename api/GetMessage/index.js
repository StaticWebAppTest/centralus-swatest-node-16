module.exports = async function (context, req) {
  const date = "2024-06-18T02:29:56.874Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

