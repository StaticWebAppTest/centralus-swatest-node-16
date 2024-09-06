module.exports = async function (context, req) {
  const date = "2024-09-06T09:11:37.820Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

