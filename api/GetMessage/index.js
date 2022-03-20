module.exports = async function (context, req) {
  const date = "2022-03-20T08:11:47.092Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

