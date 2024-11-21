module.exports = async function (context, req) {
  const date = "2024-11-21T07:12:03.274Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

