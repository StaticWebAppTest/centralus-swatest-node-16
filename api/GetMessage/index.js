module.exports = async function (context, req) {
  const date = "2024-09-14T17:10:10.247Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

