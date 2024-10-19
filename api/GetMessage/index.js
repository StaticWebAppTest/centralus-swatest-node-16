module.exports = async function (context, req) {
  const date = "2024-10-19T15:10:27.834Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

