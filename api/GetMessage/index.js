module.exports = async function (context, req) {
  const date = "2022-04-16T10:11:53.960Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

