module.exports = async function (context, req) {
  const date = "2023-07-29T06:10:18.253Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

