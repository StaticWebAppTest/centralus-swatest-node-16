module.exports = async function (context, req) {
  const date = "2024-11-14T20:13:09.987Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

