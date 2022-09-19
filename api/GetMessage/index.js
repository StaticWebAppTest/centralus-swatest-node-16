module.exports = async function (context, req) {
  const date = "2022-09-19T14:20:53.671Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

