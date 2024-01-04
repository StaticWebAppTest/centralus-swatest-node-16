module.exports = async function (context, req) {
  const date = "2024-01-04T18:11:28.478Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

