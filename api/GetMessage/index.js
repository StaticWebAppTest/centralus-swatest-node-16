module.exports = async function (context, req) {
  const date = "2022-04-13T11:09:13.583Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

