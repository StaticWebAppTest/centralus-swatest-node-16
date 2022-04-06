module.exports = async function (context, req) {
  const date = "2022-04-06T14:09:53.802Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

