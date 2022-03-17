module.exports = async function (context, req) {
  const date = "2022-03-17T13:18:19.964Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

