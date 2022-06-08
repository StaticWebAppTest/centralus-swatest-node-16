module.exports = async function (context, req) {
  const date = "2022-06-08T11:08:43.511Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

