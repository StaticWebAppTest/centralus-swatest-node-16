module.exports = async function (context, req) {
  const date = "2022-05-05T22:11:10.039Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

