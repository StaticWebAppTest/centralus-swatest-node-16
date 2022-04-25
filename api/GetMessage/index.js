module.exports = async function (context, req) {
  const date = "2022-04-25T18:14:15.348Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

