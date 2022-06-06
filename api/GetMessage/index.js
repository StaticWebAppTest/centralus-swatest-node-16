module.exports = async function (context, req) {
  const date = "2022-06-06T09:10:28.092Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

