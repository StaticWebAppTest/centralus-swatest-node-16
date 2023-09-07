module.exports = async function (context, req) {
  const date = "2023-09-07T13:11:03.450Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

