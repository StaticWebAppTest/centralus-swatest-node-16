module.exports = async function (context, req) {
  const date = "2022-04-24T15:10:40.748Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

