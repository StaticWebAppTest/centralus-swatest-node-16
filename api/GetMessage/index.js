module.exports = async function (context, req) {
  const date = "2024-11-10T09:10:53.283Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

