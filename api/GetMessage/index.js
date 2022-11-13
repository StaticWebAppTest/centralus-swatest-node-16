module.exports = async function (context, req) {
  const date = "2022-11-13T21:10:00.777Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

