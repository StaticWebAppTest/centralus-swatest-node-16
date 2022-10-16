module.exports = async function (context, req) {
  const date = "2022-10-16T20:14:04.059Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

