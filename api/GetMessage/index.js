module.exports = async function (context, req) {
  const date = "2022-09-11T14:10:22.582Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

