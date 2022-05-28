module.exports = async function (context, req) {
  const date = "2022-05-28T22:11:00.289Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

