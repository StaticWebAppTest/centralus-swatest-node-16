module.exports = async function (context, req) {
  const date = "2022-04-13T00:52:21.128Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

