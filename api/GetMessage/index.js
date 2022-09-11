module.exports = async function (context, req) {
  const date = "2022-09-11T07:11:46.915Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

