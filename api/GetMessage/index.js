module.exports = async function (context, req) {
  const date = "2022-04-13T05:10:04.900Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

