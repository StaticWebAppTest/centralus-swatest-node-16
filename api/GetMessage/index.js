module.exports = async function (context, req) {
  const date = "2024-07-12T17:10:13.478Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

