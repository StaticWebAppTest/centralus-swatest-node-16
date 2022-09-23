module.exports = async function (context, req) {
  const date = "2022-09-23T09:16:19.626Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

