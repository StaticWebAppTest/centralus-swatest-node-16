module.exports = async function (context, req) {
  const date = "2023-11-14T02:19:25.719Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

