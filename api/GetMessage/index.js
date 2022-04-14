module.exports = async function (context, req) {
  const date = "2022-04-14T19:09:56.807Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

