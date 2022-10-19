module.exports = async function (context, req) {
  const date = "2022-10-19T23:15:39.105Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

