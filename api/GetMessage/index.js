module.exports = async function (context, req) {
  const date = "2022-05-24T11:09:32.200Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

