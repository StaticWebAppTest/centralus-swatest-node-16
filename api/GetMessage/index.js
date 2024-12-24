module.exports = async function (context, req) {
  const date = "2024-12-24T23:10:57.386Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

