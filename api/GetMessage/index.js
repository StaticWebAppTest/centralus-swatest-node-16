module.exports = async function (context, req) {
  const date = "2022-07-14T13:40:47.105Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

