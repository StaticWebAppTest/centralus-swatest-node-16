module.exports = async function (context, req) {
  const date = "2022-08-25T11:10:44.841Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

