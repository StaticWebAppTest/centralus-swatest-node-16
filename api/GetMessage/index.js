module.exports = async function (context, req) {
  const date = "2022-08-25T22:11:32.370Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

