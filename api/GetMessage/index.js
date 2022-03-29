module.exports = async function (context, req) {
  const date = "2022-03-29T07:10:28.280Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

