module.exports = async function (context, req) {
  const date = "2023-04-29T18:10:17.058Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

