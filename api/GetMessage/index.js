module.exports = async function (context, req) {
  const date = "2022-06-09T03:49:45.511Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

