module.exports = async function (context, req) {
  const date = "2022-06-19T15:09:44.427Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

