module.exports = async function (context, req) {
  const date = "2022-06-17T09:11:42.748Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

