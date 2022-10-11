module.exports = async function (context, req) {
  const date = "2022-10-11T06:38:37.746Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

