module.exports = async function (context, req) {
  const date = "2022-07-20T11:09:05.985Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

