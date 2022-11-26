module.exports = async function (context, req) {
  const date = "2022-11-26T11:07:53.576Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

