module.exports = async function (context, req) {
  const date = "2022-05-11T18:13:14.935Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

