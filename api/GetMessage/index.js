module.exports = async function (context, req) {
  const date = "2024-04-11T02:19:13.529Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

