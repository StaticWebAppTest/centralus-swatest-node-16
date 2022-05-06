module.exports = async function (context, req) {
  const date = "2022-05-06T09:11:39.426Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

