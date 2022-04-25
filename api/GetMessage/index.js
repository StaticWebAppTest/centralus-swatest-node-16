module.exports = async function (context, req) {
  const date = "2022-04-25T09:11:24.964Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

