module.exports = async function (context, req) {
  const date = "2024-07-21T18:12:19.312Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

