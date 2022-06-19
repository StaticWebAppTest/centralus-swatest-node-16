module.exports = async function (context, req) {
  const date = "2022-06-19T08:12:19.702Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

