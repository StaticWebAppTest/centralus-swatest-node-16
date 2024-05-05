module.exports = async function (context, req) {
  const date = "2024-05-05T18:11:12.193Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

