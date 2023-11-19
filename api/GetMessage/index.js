module.exports = async function (context, req) {
  const date = "2023-11-19T14:07:19.346Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

