module.exports = async function (context, req) {
  const date = "2022-04-21T23:10:45.544Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

