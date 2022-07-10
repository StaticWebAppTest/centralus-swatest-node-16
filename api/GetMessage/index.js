module.exports = async function (context, req) {
  const date = "2022-07-10T18:12:19.604Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

