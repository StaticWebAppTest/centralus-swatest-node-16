module.exports = async function (context, req) {
  const date = "2022-11-13T15:11:06.932Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

