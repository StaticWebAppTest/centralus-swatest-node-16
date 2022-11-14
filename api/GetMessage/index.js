module.exports = async function (context, req) {
  const date = "2022-11-14T19:09:08.941Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

