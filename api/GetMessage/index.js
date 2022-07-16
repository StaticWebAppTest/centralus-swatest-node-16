module.exports = async function (context, req) {
  const date = "2022-07-16T06:12:53.287Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

