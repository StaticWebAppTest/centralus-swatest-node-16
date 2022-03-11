module.exports = async function (context, req) {
  const date = "2022-03-11T03:11:57.117Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

