module.exports = async function (context, req) {
  const date = "2023-12-29T13:10:54.092Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

