module.exports = async function (context, req) {
  const date = "2023-06-05T18:10:40.679Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

