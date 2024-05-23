module.exports = async function (context, req) {
  const date = "2024-05-23T02:23:53.303Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

