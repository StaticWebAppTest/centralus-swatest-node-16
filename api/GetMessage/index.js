module.exports = async function (context, req) {
  const date = "2023-05-27T02:33:15.719Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

