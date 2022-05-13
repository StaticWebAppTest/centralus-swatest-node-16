module.exports = async function (context, req) {
  const date = "2022-05-13T07:12:08.769Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

