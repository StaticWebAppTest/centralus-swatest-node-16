module.exports = async function (context, req) {
  const date = "2022-04-17T08:12:52.093Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

