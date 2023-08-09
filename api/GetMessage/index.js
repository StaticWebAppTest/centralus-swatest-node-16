module.exports = async function (context, req) {
  const date = "2023-08-09T14:09:10.084Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

