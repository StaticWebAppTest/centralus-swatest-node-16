module.exports = async function (context, req) {
  const date = "2022-10-09T19:12:08.802Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

