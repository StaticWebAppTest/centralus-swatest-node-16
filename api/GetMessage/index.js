module.exports = async function (context, req) {
  const date = "2023-09-07T18:11:03.213Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

