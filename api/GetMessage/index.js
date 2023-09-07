module.exports = async function (context, req) {
  const date = "2023-09-07T11:07:44.213Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

