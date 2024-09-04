module.exports = async function (context, req) {
  const date = "2024-09-04T17:09:47.702Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

