module.exports = async function (context, req) {
  const date = "2024-08-09T15:11:53.774Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

