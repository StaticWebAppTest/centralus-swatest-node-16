module.exports = async function (context, req) {
  const date = "2022-11-19T14:09:06.962Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

