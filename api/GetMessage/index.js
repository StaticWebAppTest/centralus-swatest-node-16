module.exports = async function (context, req) {
  const date = "2022-05-19T17:39:50.895Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

