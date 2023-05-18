module.exports = async function (context, req) {
  const date = "2023-05-18T16:11:01.241Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

