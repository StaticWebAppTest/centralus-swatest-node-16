module.exports = async function (context, req) {
  const date = "2022-04-23T15:11:04.063Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

