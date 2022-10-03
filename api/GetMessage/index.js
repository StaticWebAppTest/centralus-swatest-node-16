module.exports = async function (context, req) {
  const date = "2022-10-03T14:31:35.235Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

