module.exports = async function (context, req) {
  const date = "2022-09-04T14:09:35.822Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

