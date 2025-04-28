module.exports = async function (context, req) {
  const date = "2025-04-28T21:10:42.478Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

