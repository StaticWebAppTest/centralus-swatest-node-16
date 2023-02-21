module.exports = async function (context, req) {
  const date = "2023-02-21T18:12:29.401Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

