module.exports = async function (context, req) {
  const date = "2022-04-21T15:12:00.951Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

