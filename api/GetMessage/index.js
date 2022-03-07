module.exports = async function (context, req) {
  const date = "2022-03-07T18:11:53.045Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

