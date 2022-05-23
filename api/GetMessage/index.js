module.exports = async function (context, req) {
  const date = "2022-05-23T00:52:30.604Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

