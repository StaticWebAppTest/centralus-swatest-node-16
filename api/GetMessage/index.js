module.exports = async function (context, req) {
  const date = "2022-10-24T08:26:43.964Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

