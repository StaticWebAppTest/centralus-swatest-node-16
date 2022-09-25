module.exports = async function (context, req) {
  const date = "2022-09-25T08:15:28.235Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

