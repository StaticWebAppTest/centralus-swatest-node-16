module.exports = async function (context, req) {
  const date = "2022-08-23T16:15:33.748Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

