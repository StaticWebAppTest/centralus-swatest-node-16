module.exports = async function (context, req) {
  const date = "2024-08-10T18:12:53.602Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

