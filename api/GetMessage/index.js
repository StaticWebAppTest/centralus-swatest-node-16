module.exports = async function (context, req) {
  const date = "2023-08-14T18:10:23.016Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

