module.exports = async function (context, req) {
  const date = "2024-01-13T17:07:42.774Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

