module.exports = async function (context, req) {
  const date = "2023-09-11T14:08:21.626Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

