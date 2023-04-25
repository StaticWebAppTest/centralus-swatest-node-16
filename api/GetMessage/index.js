module.exports = async function (context, req) {
  const date = "2023-04-25T06:11:53.203Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

