module.exports = async function (context, req) {
  const date = "2022-09-27T20:14:25.719Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

