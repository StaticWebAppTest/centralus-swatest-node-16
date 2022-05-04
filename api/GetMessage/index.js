module.exports = async function (context, req) {
  const date = "2022-05-04T22:10:43.719Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

