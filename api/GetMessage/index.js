module.exports = async function (context, req) {
  const date = "2024-11-11T04:14:23.702Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

