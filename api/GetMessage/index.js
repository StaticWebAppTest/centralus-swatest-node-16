module.exports = async function (context, req) {
  const date = "2022-09-13T14:19:38.645Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

