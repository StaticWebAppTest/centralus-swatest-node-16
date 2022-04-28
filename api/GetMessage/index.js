module.exports = async function (context, req) {
  const date = "2022-04-28T15:12:05.207Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

