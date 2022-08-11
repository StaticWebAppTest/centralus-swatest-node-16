module.exports = async function (context, req) {
  const date = "2022-08-11T15:11:46.549Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

