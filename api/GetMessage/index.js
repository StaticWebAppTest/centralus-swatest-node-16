module.exports = async function (context, req) {
  const date = "2022-04-25T02:49:30.941Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

