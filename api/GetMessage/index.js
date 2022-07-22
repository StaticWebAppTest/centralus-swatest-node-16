module.exports = async function (context, req) {
  const date = "2022-07-22T09:10:43.719Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

