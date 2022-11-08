module.exports = async function (context, req) {
  const date = "2022-11-08T12:26:18.960Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

