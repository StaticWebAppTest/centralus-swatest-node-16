module.exports = async function (context, req) {
  const date = "2022-07-08T14:11:08.482Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

