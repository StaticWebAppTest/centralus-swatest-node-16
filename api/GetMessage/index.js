module.exports = async function (context, req) {
  const date = "2024-10-09T09:12:53.241Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

