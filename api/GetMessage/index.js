module.exports = async function (context, req) {
  const date = "2024-02-14T16:11:22.981Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

