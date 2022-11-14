module.exports = async function (context, req) {
  const date = "2022-11-14T17:24:55.811Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

