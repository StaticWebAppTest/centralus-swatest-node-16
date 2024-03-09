module.exports = async function (context, req) {
  const date = "2024-03-09T01:36:46.774Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

