module.exports = async function (context, req) {
  const date = "2022-09-04T15:10:53.073Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

