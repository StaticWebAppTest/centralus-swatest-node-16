module.exports = async function (context, req) {
  const date = "2022-08-16T14:11:19.962Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

